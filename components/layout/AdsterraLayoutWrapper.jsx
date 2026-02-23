// components/layout/AdsterraLayoutWrapper.jsx
"use client";

import { useEffect, useRef } from 'react';
import { getAIOptimizer } from '../../utils/adsterra';

export default function AdsterraLayoutWrapper({ children, countryCode }) {
  const initialized = useRef(false);

  useEffect(() => {
    if (typeof window !== 'undefined' && !initialized.current) {
        const optimizer = getAIOptimizer();
        if (optimizer) {
            optimizer.setGeo(countryCode);
        }

        const nativeContainer = document.getElementById('container-71b765f9f86e0b42fb5040978bef3bc2');

        const visibleAds = [
            { id: 'native', src: '//fundingfashioned.com/71b765f9f86e0b42fb5040978bef3bc2/invoke.js' },
            { id: 'social', src: '//fundingfashioned.com/ba/e7/29/bae729b6bc8836e18f8e83b545cf9591.js' }
        ];

        visibleAds.forEach(s => {
            if(document.querySelector(`script[src="${s.src}"]`)) return;
            const el = document.createElement('script');
            el.src = s.src;
            el.async = true;
            
            // PERBAIKAN: Masukkan script native ke kontainer footer jika ada
            if (s.id === 'native' && nativeContainer) {
                nativeContainer.appendChild(el);
            } else {
                document.body.appendChild(el);
            }
        });

        setTimeout(() => {
            if(document.querySelector(`script[src*="aca42d45e65aec83e6ea7b333083fb1c"]`)) return;
            const popunder = document.createElement('script');
            popunder.src = '//fundingfashioned.com/ac/a4/2d/aca42d45e65aec83e6ea7b333083fb1c.js'; 
            document.head.appendChild(popunder);
        }, 3500);

        initialized.current = true;
    }
  }, [countryCode]);

  return <>{children}</>;
}