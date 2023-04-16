import * as React from "react"
import {
  Twitter,
  Twitch,
  Instagram,
  Facebook,
  Youtube,
  GitHub,
} from "react-feather"
import {
  Container,
  Flex,
  FlexList,
  Box,
  Space,
  NavLink,
  Text,
  IconLink,
  VisuallyHidden,
} from "./ui"
import BrandLogo from "./brand-logo"

const socialMedia = {
  TWITTER: {
    url: "https://twitter.com",
    name: "Twitter",
    icon: <Twitter />,
  },
  INSTAGRAM: {
    url: "https://instagram.com",
    name: "Instagram",
    icon: <Instagram />,
  },
  FACEBOOK: {
    url: "https://facebook.com",
    name: "Facebook",
    icon: <Facebook />,
  },
  YOUTUBE: {
    url: "https://youtube.com",
    name: "YouTube",
    icon: <Youtube />,
  },
  GITHUB: {
    url: "https://github.com",
    name: "GitHub",
    icon: <GitHub />,
  },
  TWITCH: {
    url: "https://twitch.tv",
    name: "Twitch",
    icon: <Twitch />,
  },
}

const getSocialURL = ({ service, username }) => {
  const domain = socialMedia[service]?.url
  if (!domain) return false
  return `${domain}/${username}`
}

const getSocialIcon = ({ service }) => {
  return socialMedia[service]?.icon
}

const getSocialName = ({ service }) => {
  return socialMedia[service]?.name
}

export default function Footer() {

  let links = [
    {
      "id": "a24cad02-7986-590e-bb40-bfe8bad3472f",
      "navItemType": "Link",
      "text": "Products",
      "href": "#!",
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
  let meta = [
    {
      "id": "83350899-bd29-5a41-b5ef-0af3ae95c51b",
      "href": "/terms",
      "text": "Terms"
    },
    {
      "id": "dcf0c9e6-a7e1-5f23-a833-ff9f7ca8ed90",
      "href": "/privacy",
      "text": "Privacy Policy"
    }
  ]
  let socialLinks = [
    {
      "id": "cbccbf2c-e96e-5c0a-b85d-063419c65d55",
      "service": "TWITTER",
      "username": "gatsbyjs"
    },
    {
      "id": "b23e6d8a-faf3-5739-8f45-1c1e603da1b2",
      "service": "TWITCH",
      "username": "gatsbyjs"
    },
    {
      "id": "b008235d-9c58-5098-b542-66fb5ed34286",
      "service": "INSTAGRAM",
      "username": "gatsbyjs"
    },
    {
      "id": "dd4023d2-5a0b-54f8-a825-cc68722c5252",
      "service": "GITHUB",
      "username": "gatsbyjs"
    },
    {
      "id": "6bb967d2-8820-5918-a276-72dbe52757a3",
      "service": "YOUTUBE",
      "username": "gatsbyjs"
    },
    {
      "id": "b00e6da4-f741-52d7-ae1b-fd6b357eab2a",
      "service": "FACEBOOK",
      "username": "gatsbyjs"
    }
  ]
  let copyright = "©2023 Codenauts, Inc. All rights reserved.\n"


  return (
    <Box as="footer" paddingY={4}>
      <Container>
        <Flex variant="start" responsive>
          <NavLink to="/">
            <VisuallyHidden>Home</VisuallyHidden>
            <BrandLogo />
          </NavLink>
          <Space />
          <FlexList>
            {socialLinks &&
              socialLinks.map((link) => {
                const url = getSocialURL(link)
                return (
                  url && (
                    <li key={link.id}>
                      <IconLink to={url}>
                        <VisuallyHidden>{getSocialName(link)}</VisuallyHidden>
                        {getSocialIcon(link)}
                      </IconLink>
                    </li>
                  )
                )
              })}
          </FlexList>
        </Flex>
        <Space size={5} />
        <Flex variant="start" responsive>
          <FlexList variant="start" responsive>
            {links &&
              links.map((link) => (
                <li key={link.id}>
                  <NavLink to={link.href}>{link.text}</NavLink>
                </li>
              ))}
          </FlexList>
          <Space />
          <FlexList>
            {meta &&
              meta.map((link) => (
                <li key={link.id}>
                  <NavLink to={link.href}>
                    <Text variant="small">{link.text}</Text>
                  </NavLink>
                </li>
              ))}
          </FlexList>
          <Text variant="small">{copyright}</Text>
        </Flex>
      </Container>
      <Space size={3} />
    </Box>
  )
}
