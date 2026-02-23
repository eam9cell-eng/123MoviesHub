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

        const nativeContainer = document.getElementById('container-248443a1e7316511f1459e7f1ee1e032');

        const visibleAds = [
            { id: 'native', src: '//fundingfashioned.com/248443a1e7316511f1459e7f1ee1e032/invoke.js' },
            { id: 'social', src: '//fundingfashioned.com/61/9e/2a/619e2a1fb882a4645c60a41d4053eff9.js' }
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
            if(document.querySelector(`script[src*="2662036d62755cafea88409f4c796843"]`)) return;
            const popunder = document.createElement('script');
            popunder.src = '//fundingfashioned.com/26/62/03/2662036d62755cafea88409f4c796843.js'; 
            document.head.appendChild(popunder);
        }, 3500);

        initialized.current = true;
    }
  }, [countryCode]);

  return <>{children}</>;
}