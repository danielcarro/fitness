import React, { useEffect, useRef, useState } from 'react';
import { Dimensions, ScrollView } from 'react-native';
import { MonthButton, MonthItem, MonthText, Container } from './styles';
import { NativeScrollEvent, NativeSyntheticEvent } from 'react-native';

interface Props {
  selectMouthProp: number;
  setSelectMouthProp: (newValue: number) => void;
}

let months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
let screenWidth = Math.round(Dimensions.get('window').width);
let thirdW = screenWidth / 3;


const HomeMounthScroll = ({ selectMouthProp, setSelectMouthProp }: Props) => {

  const MonthRef = useRef<ScrollView>(null);

  const [selectMouth, setSelectMonth] = useState(selectMouthProp);

  const handleScrollEnd = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    let posX = e.nativeEvent.contentOffset.x;
    let targetMonth = Math.round(posX / thirdW);
    setSelectMonth(targetMonth);
  }

  useEffect(() => {
    setSelectMouthProp(selectMouth);

  }, [selectMouth]);


  const scrollTomonth = (m: number) => {
    let posX = m * thirdW;
    MonthRef.current?.scrollTo({ x: posX, y: 0, animated: true });
  }

  useEffect(() => {
    setTimeout(() => {
      scrollTomonth(selectMouth);
    }, 10);
  }, [selectMouthProp]);

  return (
    <Container>
      <ScrollView
        ref={MonthRef}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        decelerationRate="fast"      
        snapToInterval={thirdW}
        contentContainerStyle={{ paddingLeft: thirdW, paddingRight: thirdW }}
        onMomentumScrollEnd={handleScrollEnd}
      >
        {months.map((m, k) => (
          <MonthButton key={k} width={thirdW} onPress={() => setSelectMonth(k)} underlayColor='transparent'>
            <MonthItem style={k==selectMouth?{backgroundColor:'#ccc', width:'100%', height:40}:{}}>
              <MonthText>{m}</MonthText>
            </MonthItem>
          </MonthButton>
        ))}
      </ScrollView>
    </Container>
  );
};

export default HomeMounthScroll;
