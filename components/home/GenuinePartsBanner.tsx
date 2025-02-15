"use client"

import React from 'react'
import { Card } from '../ui/card'
import { Button } from '../ui/button'
import { useTranslation } from 'react-i18next'

const GenuinePartsBanner = () => {
    const { t } = useTranslation("common")

    return (
        <Card width='max-w-[1240px]' className='px-[153px] py-[39px] flex flex-col items-center gap-6 rounded-[1.5rem]'>

            <p className='text-center text-[2rem] font-semibold leading-[48px]'>{t('home.genuinePartsBanner.title')}</p>
            <Button variant="secondary">
                {t('button.bookNow')}
            </Button>

        </Card>
    )
}

export default GenuinePartsBanner
