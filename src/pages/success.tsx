import React from 'react';

import Link from 'next/link';

import { Button } from '../button/Button';

export default function contact() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2 bg-gray-100">
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="flex items-center min-h-screen bg-gray-100">
          <div className="container mx-auto">
            <div className="max-w-xl mx-auto my-10 bg-white p-5 rounded shadow-sm text-center">
              <h1 className="p-5 text-5xl">Success🥳</h1>
              <div className="flex-wrap p-5">
                <Link href="https://drive.google.com/file/d/1G_W0OyKgnu2_qe_j4kG1R41pKGZc75vI/view?usp=sharing">
                  <a>
                    <Button xl>Download OEM Catalog</Button>
                  </a>
                </Link>
                <div className="pt-5">
                  <Link href="/">
                    <a>
                      <Button xl>Back to homepage</Button>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
