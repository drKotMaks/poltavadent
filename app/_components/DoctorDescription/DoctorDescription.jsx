'use client';
import React, { useState } from 'react';
import styles from './doctor-description.module.scss';
import DoctorName from '../DoctorName/DoctorName';
import Image from 'next/image';
import SocialMediaLink from '../SocialMediaLink/SocialMediaLink';
import LocalItem from '../LocalItem/LocalItem';
import { Skeleton } from '@/components/ui/skeleton';
import InfoDate from '../InfoDate/InfoDate';
import ButtonAction from '../Button/ButtonAction/ButtonAction';
//import {setting} from '@/lib/setting';

const DoctorDescription = ({ doctor, majors, params }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const imageUrl = doctor?.imageDoctor?.url || '';

  return (
    <div className={styles.root}>
      <div className="relative">
        {!imageLoaded && <Skeleton width={500} height={500} />}
        <Image
          width={500}
          height={500}
          src={imageUrl}
          alt={doctor.nameDoctor}
          onLoadingComplete={() => setImageLoaded(true)}
          onError={() => setImageLoaded(true)} // При помилці завантаження
          className={styles.Image}  
        />
       
         
      </div>

      <div className={styles.description}>
        <SocialMediaLink ig={doctor.socialUrlInstagram} fb={doctor.socialUrlFacebook} />
        <DoctorName nameDoctor={doctor.nameDoctor} lastName={doctor.lastName} status={doctor.status} />
        
        <InfoDate
          rating={doctor.review}
          upDate={doctor.updatedAt}
          vacationStart={doctor.vacationStart}
          vacationEnd={doctor.vacationEnd}

        />
       
        <LocalItem latitude="50.4062575" longitude="30.6270358" />
        <ButtonAction params={params}/>
      </div>
    </div>
  );
};

export default DoctorDescription;
