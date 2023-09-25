import { StyleSheet, View,Text, FlatList, Image,Dimensions ,Button, TouchableOpacity} from 'react-native'
import React,{useState,useRef,useEffect} from 'react'
import Data from '../Components/onbordingData'

const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height
const Onboarding = () => {
    const flatListRef = useRef()

  //  useEffect(()=>{
    var nextScroll = ()=>{

      if(activeIndex < Data.length-1){
        flatListRef.current.scrollToIndex({
          index:activeIndex+1,
          animation:true
        })
      }
    }
   
// })

    const [activeIndex, setActiveIndex] = useState(0)

    // handle Scroll
    const handleScroll = (event) =>{
        // Get the scroll position
        const scrollPosition = event.nativeEvent.contentOffset.x
       
        // Get the index of the current active item
        const index = scrollPosition/screenWidth
       
        // update current index
        setActiveIndex(index)
      }

    //   Dots
    const renderDot = () => {
     
        return Data.map((item, index) => {
            if (activeIndex === index){
                return(
                <View key={index} className='bg-green-500 h-2 w-5 rounded mx-1'>
                <Text>{item.dot}</Text>
            </View>
        )} else{

            
          return (
            <View key={index} className='bg-slate-300 h-2 w-2 rounded mx-1'>
                <Text>{item.dot}</Text>
            </View>
          );
            }
        });
      };


  // const next =()=>{
  //   // if (activeIndex < 2)
  //   // setActiveIndex(prevState => prevState + 1)
  //   nextScroll()
  // }

  return (
    <View className='flex-3 justify-center items-center'>
     <FlatList
     ref={flatListRef}
      data={Data}
      scrollToIndex={1}
      horizontal
      pagingEnabled={true}
      
      showsHorizontalScrollIndicator={false}
      onScroll={handleScroll}
      renderItem={({ item }) => (
          <View className='flex-1'>

          <Image 
            resizeMode='cover'
            style={{ width: screenWidth, height: screenHeight/2, }} 
            source={item.image}
            />
            <Text className="font-bold text-3xl py-4 text-center px-3" style={styles.title}>{item.title}</Text>
            <Text className='text-center px-4' style={{width:screenWidth}}>{item.desc}</Text>
            </View>
      )}
      keyExtractor={(item) => item.id}
      /> 
      
      {/* rendering Dots */}
        <View className='flex-row justify-center items-center mt-7'>
      {renderDot()}
        </View>

        {/* buttons */}

      <TouchableOpacity onPress={nextScroll} className='bg-green-500 w-11/12 h-12 my-3 mt-7 rounded-3xl justify-center items-center'>
        <Text className='text-white text-2xl font-bold'>Next</Text>
      </TouchableOpacity>

      <TouchableOpacity className='bg-slate-200 w-11/12 h-12 rounded-3xl justify-center items-center'>
        <Text className='text-green-500 text-2xl font-bold'>Skip</Text>
      </TouchableOpacity>
     
     

        </View>
  )
}

export default Onboarding;


const styles = StyleSheet.create({
    title:{
        width:screenWidth,  
    },
})
