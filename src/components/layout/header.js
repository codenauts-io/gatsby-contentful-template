import * as React from "react"
import { Menu, X } from "react-feather"
import {
  Container,
  Flex,
  FlexList,
  Space,
  NavLink,
  Button,
  InteractiveIcon,
  Nudge,
  VisuallyHidden,
} from "../ui"
import {
  mobileNavOverlay,
  mobileNavLink,
  desktopHeaderNavWrapper,
  mobileHeaderNavWrapper,
  mobileNavSVGColorWrapper,
} from "./header.css"
import NavItemGroup from "./nav-item-group"
import BrandLogo from "../brand-logo"

export default function Header() {

  const [isOpen, setOpen] = React.useState(false)

  let cta = {
    text: 'Bobik',
    href: '#'
  }

  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflowY = "hidden"
    } else {
      document.body.style.overflowY = "visible"
    }
  }, [isOpen])


  let navItems = [
    {
      "id": "a24cad02-7986-590e-bb40-bfe8bad3472f",
      "navItemType": "Group",
      "name": "Products",
      "navItems": [
        {
          "id": "87175feb-17c5-5b2d-8901-f18dc67dead0",
          "href": "#!",
          "text": "Super",
          "description": null,
          "icon": {
            "alt": "Clouds Filled Alternative",
            "gatsbyImageData": {
              "images": {
                "sources": [
                  {
                    "srcSet": "https://images.ctfassets.net/f2s1y6qygs1r/2NeXSSCyiXaBh82qjHqZJe/afedb893a9ac93ad4c613c4cc53c8fa6/Product_SuperApp__Inverted_true__Size_Large.png?w=48&h=48&q=50&fm=webp 48w,\nhttps://images.ctfassets.net/f2s1y6qygs1r/2NeXSSCyiXaBh82qjHqZJe/afedb893a9ac93ad4c613c4cc53c8fa6/Product_SuperApp__Inverted_true__Size_Large.png?w=96&h=96&q=50&fm=webp 96w,\nhttps://images.ctfassets.net/f2s1y6qygs1r/2NeXSSCyiXaBh82qjHqZJe/afedb893a9ac93ad4c613c4cc53c8fa6/Product_SuperApp__Inverted_true__Size_Large.png?w=192&h=192&q=50&fm=webp 192w",
                    "sizes": "(min-width: 192px) 192px, 100vw",
                    "type": "image/webp"
                  }
                ],
                "fallback": {
                  "src": "https://images.ctfassets.net/f2s1y6qygs1r/2NeXSSCyiXaBh82qjHqZJe/afedb893a9ac93ad4c613c4cc53c8fa6/Product_SuperApp__Inverted_true__Size_Large.png?w=192&h=192&q=50&fm=png",
                  "srcSet": "https://images.ctfassets.net/f2s1y6qygs1r/2NeXSSCyiXaBh82qjHqZJe/afedb893a9ac93ad4c613c4cc53c8fa6/Product_SuperApp__Inverted_true__Size_Large.png?w=48&h=48&q=50&fm=png 48w,\nhttps://images.ctfassets.net/f2s1y6qygs1r/2NeXSSCyiXaBh82qjHqZJe/afedb893a9ac93ad4c613c4cc53c8fa6/Product_SuperApp__Inverted_true__Size_Large.png?w=96&h=96&q=50&fm=png 96w,\nhttps://images.ctfassets.net/f2s1y6qygs1r/2NeXSSCyiXaBh82qjHqZJe/afedb893a9ac93ad4c613c4cc53c8fa6/Product_SuperApp__Inverted_true__Size_Large.png?w=192&h=192&q=50&fm=png 192w",
                  "sizes": "(min-width: 192px) 192px, 100vw"
                }
              },
              "layout": "constrained",
              "backgroundColor": "#f8d808",
              "width": 192,
              "height": 192
            }
          }
        },
        {
          "id": "5ed17c8a-a533-58c6-891e-2de4b695bc13",
          "href": "#!",
          "text": "Market",
          "description": "Incremental crawl so much wow this explains why these are different boom",
          "icon": {
            "alt": "Umbrella Filled Alternative",
            "gatsbyImageData": {
              "images": {
                "sources": [
                  {
                    "srcSet": "https://images.ctfassets.net/f2s1y6qygs1r/dB20mJtrXcJTs59Kq7g1Z/249b519c024b5c31ebf27cfae95524fd/Product_HyperMarket__Inverted_true__Size_Large.png?w=48&h=48&q=50&fm=webp 48w,\nhttps://images.ctfassets.net/f2s1y6qygs1r/dB20mJtrXcJTs59Kq7g1Z/249b519c024b5c31ebf27cfae95524fd/Product_HyperMarket__Inverted_true__Size_Large.png?w=96&h=96&q=50&fm=webp 96w,\nhttps://images.ctfassets.net/f2s1y6qygs1r/dB20mJtrXcJTs59Kq7g1Z/249b519c024b5c31ebf27cfae95524fd/Product_HyperMarket__Inverted_true__Size_Large.png?w=192&h=192&q=50&fm=webp 192w",
                    "sizes": "(min-width: 192px) 192px, 100vw",
                    "type": "image/webp"
                  }
                ],
                "fallback": {
                  "src": "https://images.ctfassets.net/f2s1y6qygs1r/dB20mJtrXcJTs59Kq7g1Z/249b519c024b5c31ebf27cfae95524fd/Product_HyperMarket__Inverted_true__Size_Large.png?w=192&h=192&q=50&fm=png",
                  "srcSet": "https://images.ctfassets.net/f2s1y6qygs1r/dB20mJtrXcJTs59Kq7g1Z/249b519c024b5c31ebf27cfae95524fd/Product_HyperMarket__Inverted_true__Size_Large.png?w=48&h=48&q=50&fm=png 48w,\nhttps://images.ctfassets.net/f2s1y6qygs1r/dB20mJtrXcJTs59Kq7g1Z/249b519c024b5c31ebf27cfae95524fd/Product_HyperMarket__Inverted_true__Size_Large.png?w=96&h=96&q=50&fm=png 96w,\nhttps://images.ctfassets.net/f2s1y6qygs1r/dB20mJtrXcJTs59Kq7g1Z/249b519c024b5c31ebf27cfae95524fd/Product_HyperMarket__Inverted_true__Size_Large.png?w=192&h=192&q=50&fm=png 192w",
                  "sizes": "(min-width: 192px) 192px, 100vw"
                }
              },
              "layout": "constrained",
              "backgroundColor": "#f8d808",
              "width": 192,
              "height": 192
            }
          }
        },
        {
          "id": "9f30a775-337f-5c7b-89ef-4821431fcb36",
          "href": "#!",
          "text": "Track",
          "description": null,
          "icon": {
            "alt": "Pulse Filled Alternative",
            "gatsbyImageData": {
              "images": {
                "sources": [
                  {
                    "srcSet": "https://images.ctfassets.net/f2s1y6qygs1r/oItNIXulMbf4K1ERM31KO/48690f4c54d3895db03f2c309c459dfa/Product_AcmeTrack__Inverted_true__Size_Large.png?w=48&h=48&q=50&fm=webp 48w,\nhttps://images.ctfassets.net/f2s1y6qygs1r/oItNIXulMbf4K1ERM31KO/48690f4c54d3895db03f2c309c459dfa/Product_AcmeTrack__Inverted_true__Size_Large.png?w=96&h=96&q=50&fm=webp 96w,\nhttps://images.ctfassets.net/f2s1y6qygs1r/oItNIXulMbf4K1ERM31KO/48690f4c54d3895db03f2c309c459dfa/Product_AcmeTrack__Inverted_true__Size_Large.png?w=192&h=192&q=50&fm=webp 192w",
                    "sizes": "(min-width: 192px) 192px, 100vw",
                    "type": "image/webp"
                  }
                ],
                "fallback": {
                  "src": "https://images.ctfassets.net/f2s1y6qygs1r/oItNIXulMbf4K1ERM31KO/48690f4c54d3895db03f2c309c459dfa/Product_AcmeTrack__Inverted_true__Size_Large.png?w=192&h=192&q=50&fm=png",
                  "srcSet": "https://images.ctfassets.net/f2s1y6qygs1r/oItNIXulMbf4K1ERM31KO/48690f4c54d3895db03f2c309c459dfa/Product_AcmeTrack__Inverted_true__Size_Large.png?w=48&h=48&q=50&fm=png 48w,\nhttps://images.ctfassets.net/f2s1y6qygs1r/oItNIXulMbf4K1ERM31KO/48690f4c54d3895db03f2c309c459dfa/Product_AcmeTrack__Inverted_true__Size_Large.png?w=96&h=96&q=50&fm=png 96w,\nhttps://images.ctfassets.net/f2s1y6qygs1r/oItNIXulMbf4K1ERM31KO/48690f4c54d3895db03f2c309c459dfa/Product_AcmeTrack__Inverted_true__Size_Large.png?w=192&h=192&q=50&fm=png 192w",
                  "sizes": "(min-width: 192px) 192px, 100vw"
                }
              },
              "layout": "constrained",
              "backgroundColor": "#f8d808",
              "width": 192,
              "height": 192
            }
          }
        }
      ]
    },
    {
      "id": "a45bf3ae-6f44-5ef9-b081-d38fdde76ff8",
      "navItemType": "Link",
      "href": "#!",
      "text": "Pricing"
    },
    {
      "id": "63f6b1bb-6887-5cc9-992f-316d6977793d",
      "navItemType": "Link",
      "href": "/about",
      "text": "About"
    },
    {
      "id": "75affd84-e36a-50de-84ed-f19e8043317d",
      "navItemType": "Link",
      "href": "#!",
      "text": "Blog"
    }
  ]

  return (
    <header>
      <Container className={desktopHeaderNavWrapper}>
        <Space size={2} />
        <Flex variant="spaceBetween">
          <NavLink to="/">
            <BrandLogo />
          </NavLink>
          <Flex gap={4}>
            <nav>
              <FlexList gap={4}>
                {navItems &&
                    navItems.map((navItem) => (
                        <li key={navItem.id}>
                          {navItem.navItemType === "Group" ? (
                              <NavItemGroup
                                  name={navItem.name}
                                  navItems={navItem.navItems}
                              />
                          ) : (
                              <NavLink to={navItem.href}>{navItem.text}</NavLink>
                          )}
                        </li>
                    ))}
              </FlexList>
            </nav>
            <div>{cta && <Button to={cta.href}>{cta.text}</Button>}</div>
          </Flex>
        </Flex>
      </Container>
      <Container className={mobileHeaderNavWrapper[isOpen ? "open" : "closed"]}>
        <Space size={2} />
        <Flex variant="spaceBetween">
          <span
            className={
              mobileNavSVGColorWrapper[isOpen ? "reversed" : "primary"]
            }
          >
            <NavLink to="/">
              <VisuallyHidden>Home</VisuallyHidden>
              <BrandLogo />
            </NavLink>
          </span>
          <Flex>
            <Space />
            <div>
              {cta && (
                <Button to={cta.href} variant={isOpen ? "reversed" : "primary"}>
                  {cta.text}
                </Button>
              )}
            </div>
            <Nudge right={3}>
              <InteractiveIcon
                title="Toggle menu"
                onClick={() => setOpen(!isOpen)}
                className={
                  mobileNavSVGColorWrapper[isOpen ? "reversed" : "primary"]
                }
              >
                {isOpen ? <X /> : <Menu />}
              </InteractiveIcon>
            </Nudge>
          </Flex>
        </Flex>
      </Container>
      {isOpen && (
        <div className={mobileNavOverlay}>
          <nav>
            <FlexList responsive variant="stretch">
              {navItems?.map((navItem) => (
                <li key={navItem.id}>
                  {navItem.navItemType === "Group" ? (
                    <NavItemGroup
                      name={navItem.name}
                      navItems={navItem.navItems}
                    />
                  ) : (
                    <NavLink to={navItem.href} className={mobileNavLink}>
                      {navItem.text}
                    </NavLink>
                  )}
                </li>
              ))}
            </FlexList>
          </nav>
        </div>
      )}
    </header>
  )
}
