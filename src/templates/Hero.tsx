import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <Link href="https://github.com/ixartz/Next-JS-Landing-Page-Starter-Template">
            <a>GitHub</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>Sign in</a>
          </Link>
        </li>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            {'DashMileUSA\n'}
            <span className="text-primary-500">
              #1 Alternative OEM Manufacturer
            </span>
          </>
        }
        description="Leader of the Alternative Industry DashMile, based in Shenzhen China, and office in Southern California. With a 97,000 sq ft. facility and a daily production capacity of more then 200,000 units we are here to offer you a wide range of services including OEM, ODM."
        button={
          <Link href="https://drive.google.com/file/d/1G_W0OyKgnu2_qe_j4kG1R41pKGZc75vI/view?usp=sharing">
            <a>
              <Button xl>Download OEM Catalog</Button>
            </a>
          </Link>
        }
      />
    </Section>
  </Background>
);

export { Hero };
