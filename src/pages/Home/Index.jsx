import React from 'react'
import HeaderSliderComponent from '../../components/Home/HeaderSliderComponent'
import PopularCategorieComponent from '../../components/Home/PopularCategories/PopularCategorieComponent'
import GoldenOfferCopmonent from '../../components/Home/GoldenOffer/GoldenOfferCopmonent'
import ImageCoverComponent from '../../components/Home/ImageCover/ImageCoverComponent'
import PopularMobilesComponent from '../../components/Home/PopularMobiles/PopularMobilesComponent'
import { ImageCoverData } from '../../assets/Data/ImageCoverItemData'
export default function Home() {
    return (
        <>
            <HeaderSliderComponent />
            <PopularCategorieComponent />
            <GoldenOfferCopmonent />
            <ImageCoverComponent data={ImageCoverData} titleName="گوشی مبایل" >
            </ImageCoverComponent>
            <PopularMobilesComponent />
        </>
    )
}
