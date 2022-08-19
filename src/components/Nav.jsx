/* This example requires Tailwind CSS v2.0+ */
import { Disclosure} from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import Logo from '../assets/Logotipo.png'
const navigation = [
  { name: 'About Me', href: '#About'},
  { name: 'Works', href: '#Works' },
  { name: 'Contact', href: '#Contact'},
  { name: 'Let´s talk', href: 'mailto:ocampokevin14@gmail.com' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Nav() {
  return (
    <Disclosure as="nav" className="flex justify-between h-15 items-center">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-30 text-black">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="buttonH inline-flex items-center justify-center p-2 rounded-md text-black hover:text-dark  focus:outline-none">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="xicon block h-6 w-6 bg-inherit sm:hover:bg-inherit" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6 bg-inherit sm:hover:bg-inherit" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:justify-around">
                <div className="flex-shrink-0 flex items-center justify-between">
                  <img
                    className="block lg:hidden h-20 w-auto pt-5"
                    src={Logo}
                    alt="Kev"
                  />
                  <img
                    className="hidden lg:block h-20 w-auto"
                    src={Logo}
                    alt="Kev"
                  />
                </div>
                <div className="hidden sm:block sm:ml-6 items-center justify-around p-9">
                  <div className="flex space-x-4 items-center">
                    {navigation.map((item) => (
                      <a
                   
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? 'bg-gray-900 text-black' : 'text-black hover:bg-[#ffc23d] hover:text-white',
                          'px-3 py-2 rounded-md text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            

                {/* Profile dropdown */}
                            
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-1 pt-2 pb-3 pr-7 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button
              
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-black' : 'text-black hover:bg-[#ffc23d] hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
