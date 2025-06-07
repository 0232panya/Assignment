
import React, { createContext, useState, useEffect } from "react";
import Cart from "../Components/Cart/Cart";
import Orders from "../Components/Orders/Orders";
import PlaceOrder from "../Components/PlaceOrder/PlaceOrder";
import { db, auth } from "./../firebase";
import { doc, getDoc, setDoc, updateDoc, arrayUnion } from 'firebase/firestore'

export const ShopContext = createContext();

const ShopContextProvider = ({ children }) =>{

    // ----------- PRODUCT --------------

    const [product, setProduct] = useState([]);
    const [collectionProduct, setCollectionProduct] = useState([]);
    const [category, setCategory] = useState([]);
    const [filter, setFilter] = useState("1960");
    const [isLoading, setIsLoading] = useState(false);
   
    const [sortBy, setSortBy] = useState(''); 

    const [selectedCategory, setSelectedCategory] = useState('');
    const [currentPage, setCurrentPage] = useState(1); // current page for pagination
    const productsPerPage = 6; // Number of Products per page

    // ----------- CHECKOUT,CART -----------------

    const [cart, setCart] = useState([]);
    
    // Load the cart from localStorage (or start with an empty array)
    // const [cart, setCart] = useState(() => {
    //     const savedCart = localStorage.getItem("cart");
    //     return savedCart ? JSON.parse(savedCart) : [];
    //   });
    const [price, setPrice] = useState(0);
    const [enable, setEnable] = useState(false);
    const [delivery, setDelivery] = useState(0);
    const [quantities, setQuantities] = useState( cart.reduce((acc, product) => {
        acc[product.id] += 1; // Initialize each product with quantity 1
        return acc;
      }, {}));

    // 
    const [items, setItems] = useState([]);

    const [currentStep, setCurrentStep] = useState(1);
    const [isComplete, setIsComplete] = useState(false);


    const Breadcrumbs = [
        {
            name : "Cart",
            Component : () => <div><Cart /></div>
            
        },
        {
            name : "Address",
            Component : () => <div><Orders /></div>
        },
        {
            name : "Payment",
            Component : () => <div><PlaceOrder /></div>
        }
       
    ]

    const handleCheckOutNext = () =>{
        setCurrentStep(prevStep =>{
            if(prevStep === Breadcrumbs.length){
                setIsComplete(true);
            }else{
                return prevStep +1
            }
        })
    }

    // ------------ PRODUCT API's ------------------------
  useEffect(()=>{

    setIsLoading(true);

    fetch(`https://dummyjson.com/products?limit=20&skip=40&sortBy=${sortBy}`)
        .then(res => res.json())
        .then(res =>{
            setProduct(res.products);
            // console.log(res.products)
            setIsLoading(false);
            setSortBy(sortBy);
        })

    },[filter,sortBy]);

    // ------------ CATEGORY API --------------------

    useEffect(() => {

        // fetch("https://dummyjson.com/products/category-list")
        fetch('https://dummyjson.com/products/categories')
        .then(res => res.json())
        .then((res) =>{
            setCategory(res);
            // console.log(res)

            if(res.length > 0){
              setSelectedCategory(res[0].slug)
            }
        })
    },[])


    // ---------------- COLLECTION PRODUCTS --------------
    
    useEffect(() => {
      if (selectedCategory) {
        setIsLoading(true);
        const skip = (currentPage - 1) * productsPerPage; // calculate skip for pagination

        fetch(`https://dummyjson.com/products/category/${selectedCategory}?limit=${productsPerPage}&skip=${skip}&sortBy=${sortBy}`)
          .then(res => res.json())
          .then((response) => {
            // setProduct(response.products);
            setCollectionProduct(response.products);
            setSortBy(sortBy)
            setIsLoading(false);
          })
          
      }
    }, [selectedCategory, currentPage, sortBy]);

    // ------------ select product by category ---------------

    const handleCatClick =(category) =>{
      setSelectedCategory(category)
    }

    //  ----------- pagination ------------

    const handleNextPage = () =>{
      setCurrentPage((prev) => prev + 1)
    }

    const handlePrevPage =() =>{
      setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev))
    }


    // ---------- CART CLICKS FUNCTIONS ------------------

        const handleClick = async (i) => {

            if (!i.id || !i.title || !i.price) {
                console.error('Invalid product data:', i);
                alert('Product data is incomplete. Cannot add to cart.');
                return;
              }

            let isPresent = false;
            cart.forEach((p) =>{
                if(i.id=== p.id)
                    isPresent = true;
                    
            })
            if(isPresent){
                
                return;
            }
            
            setCart([...cart, i]);
            setEnable(true)

            // Firebase Firestore logic
  const user = auth.currentUser;
  
  if (!user) {
    alert('Please log in to add items to the cart');
    return;
  }

  const cartRef = doc(db, 'carts', user.uid);

  try {
    const cartSnap = await getDoc(cartRef);
    
    if (cartSnap.exists()) {
      // If the cart exists, update it
      await updateDoc(cartRef, {
        items: arrayUnion({
          id: i.id,
          title: i.title,
          price: i.price,
          thumbnail: i.thumbnail,
          quantity: 1, // Default to 1 (you can manage quantity elsewhere)
        }),
      });
      console.log('Product added to existing cart in Firestore.');
    } else {
      // If the cart does not exist, create it
      await setDoc(cartRef, {
        items: [
          {
            id: i.id,
            title: i.title,
            price: i.price,  
            thumbnail: i.thumbnail,
            quantity: 1 ,
          },
        ],
      });
      console.log('Cart created, and product added to Firestore.');
      setEnable(true)
    }
  } catch (error) {
    console.error('Error adding product to Firestore:', error);
    setEnable(false)
  }

        }

        // -------- FETCH DATA FROM FIREBASE --------------
        const [user, setUser] = useState(null);

        useEffect(() => {
            auth.onAuthStateChanged(async(user) => {
              if (user) {
                // console.log('User is logged in:', user);
                setUser(user);
                fetchCart(user.uid);
                setEnable(true)
                // console.log(enable)
              } else {
                // console.log('No user logged in');
                setUser(null);
                setCart([]);
                setEnable(false)
              }
            });
        
          }, [user]);

            const fetchCart = async () => {

              if (!user) {
                // console.log('No user logged in.');
                return true;
              }

              // console.log('Logged-in user:', user);
        
              const cartRef = doc(db, 'carts', user.uid);
              try {
                const cartSnap = await getDoc(cartRef);
                if (cartSnap.exists()) {
                    // console.log('Firestore cart snapshot:', cartSnap.data());

                    const cartData = cartSnap.data().items || [];
                  setCart(cartData);
                } else {
                  console.log('No cart found');
                }
              } catch (error) {
                console.error('Error fetching cart from Firestore:', error);
              } finally {
                console.log('loading')
              }
            };
        


        // const handleChange = (carts,d) =>{

        //     let ind = 0;
        //     cart.forEach((data, index) =>{
        //         if(data.id === carts.id){
        //             ind = index;
        //         }
        //     })
        //         const tempArr = cart;
        //         // tempArr[ind].item_num += d;                
        //         setItem_num(tempArr[ind].item_num += d)

        //         if(tempArr[ind].item_num === 0){
        //             tempArr[ind].item_num = 1;
        //         }

        //         console.log(cart)
        //         console.log(tempArr[ind])
        //         setCart([...tempArr]);
        // }

        const handlePrice= () => {
            let ans = 0;
            cart.map((item) =>{
                return(
                ans += item.quantity * item.price
                
            )})
            setPrice(ans.toFixed(2));
        }

        useEffect(() =>{
            handlePrice();
        })

        const handleRemove = async (id) =>{
            let arr = cart.filter((item) => item.id !== id)
                setCart(arr)

                const user = auth.currentUser;
                if (!user) return;

                const cartRef = doc(db, 'carts', user.uid);
                try {
                const cartSnap = await getDoc(cartRef);
                if (cartSnap.exists()) {
                const updatedItems = cartSnap.data().items.filter(item => item.id !== id);

                // Update the cart with the filtered items
                    await updateDoc(cartRef, {
                    items: updatedItems
                });
                setCart(updatedItems); // Update local state
                }
                } catch (error) {
                    console.error('Error removing item from cart:', error);
                }
            
        }

        const updateQuantity = async (itemId, newQuantity) => {
            if (user && newQuantity >= 0) {
              const updatedCartItems = cart.map(item => {
                if (item.id === itemId) {
                  return { ...item, quantity: newQuantity };
                }
                return item;
              });
        
              // Update Firestore document
              const cartRef = doc(db, 'carts', user.uid);
              try {
                await updateDoc(cartRef, { items: updatedCartItems });
                setCart(updatedCartItems); // Update local state after Firestore is updated
              } catch (error) {
                console.error('Error updating cart:', error);
              }
            }
          };

          const increaseQuantity = (itemId) => {
            const item = cart.find(item => item.id === itemId);
            if (item) {
              updateQuantity(itemId, (item.quantity || 1)+ 1);
            }
          };
        
          // Decrease quantity
          const decreaseQuantity = (itemId) => {
            const item = cart.find(item => item.id === itemId);
            if (item && item.quantity > 1) {
              updateQuantity(itemId, (item.quantity || 1) - 1);
            }
          };


    const handleDelivery = () =>{

        let d = 10;

        if(price >= 10) {
            setDelivery(0)
        } else if (price === 0){
            setDelivery(0)
        }
        else{
            setDelivery(d)
        }

    }

    useEffect(() =>{
        handleDelivery();
    });


    return (
        <ShopContext.Provider value={{product, filter, setFilter, setProduct, isLoading, handleClick, setCart, cart, handleRemove, price, sortBy, setSortBy, enable, category, isComplete, currentStep, handleCheckOutNext, Breadcrumbs, setCurrentStep, setIsComplete, delivery, items, setItems, increaseQuantity, decreaseQuantity, handleCatClick, selectedCategory, currentPage, productsPerPage, handleNextPage, handlePrevPage,collectionProduct }}>
            {children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;