import React, {useState, useRef} from 'react';
import {ScrollView, Image, Text, View, useWindowDimensions} from 'react-native';
import {useSharedValue} from 'react-native-reanimated';
import Carousel from 'react-native-reanimated-carousel';
import {SafeAreaView} from 'react-native-safe-area-context';
import Images from '@constants/Image';

interface CarouselItem {
  index: number;
  // Add any other properties based on your item structure
}

interface BasicCarouselProps {
  children: React.ReactNode[];
  height?: number;
  isLoop: boolean;
}

const PAGE_WIDTH = 700;

function BasicCarousel(props: BasicCarouselProps) {
  // pass the prop as height for taking proper height by carousel component
  const {children, height, isLoop} = props;
  const windowWidth = useWindowDimensions().width;
  const scrollOffsetValue = useSharedValue(0);
  const [isVertical, setIsVertical] = useState(false);
  const [isFast, setIsFast] = useState(false);
  const [isAutoPlay, setIsAutoPlay] = useState(false);
  const [isPagingEnabled, setIsPagingEnabled] = useState(true);
  const ref = useRef<Carousel<CarouselItem>>(null);

  const baseOptions = isVertical
    ? {
        vertical: true,
        width: windowWidth,
        height: PAGE_WIDTH / 2,
      }
    : {
        vertical: false,
        width: windowWidth,
        height: height || PAGE_WIDTH / 2,
      };

  return (
    <SafeAreaView edges={['bottom']}>
      <Carousel<CarouselItem>
        {...baseOptions}
        loop={isLoop}
        enabled
        ref={ref}
        defaultScrollOffsetValue={scrollOffsetValue}
        testID={'xxx'}
        autoPlay={isAutoPlay}
        autoPlayInterval={isFast ? 100 : 2000}
        data={children.map((child, index) => ({index}))}
        onScrollStart={() => {}}
        onScrollEnd={() => {}}
        onConfigurePanGesture={g => g.enabled(false)}
        pagingEnabled={isPagingEnabled}
        onSnapToItem={index => {
          // console.log('current index:', index);
        }}
        renderItem={({item}) => {
          const index = item?.index;
          return (
            <View style={{flex: 1, marginRight: 3}} key={index} index={index}>
              {children?.length > 0 ? children[index] : children}
            </View>
          );
        }}
      />
    </SafeAreaView>
  );
}

export default BasicCarousel;
