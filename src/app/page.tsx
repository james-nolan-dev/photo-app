"use client";

import {CldImage, CldUploadButton} from "next-cloudinary";
import {useState} from "react";

export type UploadResult = {
    info: {
        public_id: string
    }
    event: 'success'
}

export default function Home() {
    const [imageId, setImageId] = useState('');
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <CldUploadButton
                onUpload={(result: UploadResult) => {
                    setImageId(result.info.public_id);
                }}
                uploadPreset='pqvlpywl'
            />
            {imageId &&
                <CldImage width='400'
                          height='300'
                          alt='test'
                          src={imageId}
                          sizes='100vw'
                />
            }

        </main>
    )
}
