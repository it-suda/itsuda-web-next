import banners from "data/banners";
import { useEffect, useState } from "react";
import S from "./style";

export default function Banner() {
  const intervalTime: number = 2000;
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      if (currentIndex >= banners.length - 1) {
        setCurrentIndex(0);
      } else {
        setCurrentIndex((currentIndex) => currentIndex + 1);
      }
    }, intervalTime);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const getState = (i: number) => {
    if (i === currentIndex) {
      return "current";
    } else if (
      i === currentIndex + 1 ||
      (currentIndex === banners.length - 1 && i === 0)
    ) {
      return "next";
    } else if (
      i === currentIndex - 1 ||
      (currentIndex === 0 && i === banners.length - 1)
    ) {
      return "prev";
    } else {
      return "hidden";
    }
  };

  return (
    <S.Container>
      <S.Banner
        image={banners[currentIndex].image.src}
        bgColor={banners[currentIndex].bgColor}
      >
        <S.Contents>
          잇수다에는
          <p>
            <S.Box>
              {banners.map(({ name }, index) => (
                <S.Name key={index} state={getState(index)}>
                  {name}
                </S.Name>
              ))}
            </S.Box>
            를 위한
          </p>
          이벤트 잇수다
        </S.Contents>
      </S.Banner>
    </S.Container>
  );
}
