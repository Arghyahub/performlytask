import * as React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

interface Props {
  location: {
    link: string;
    name: string;
  }[];
}

function handleClick(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

export default function NavigationBreadCrumbs({ location }: Props) {
  return (
    <Stack>
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
      >
        {location.map((loc, index) => (
          <Link
            underline="hover"
            key={index}
            color={index === location.length - 1 ? "#003FAD" : "inherit"}
            fontSize={"12px"}
            href={loc.link}
            onClick={handleClick}
          >
            {loc.name}
          </Link>
        ))}
      </Breadcrumbs>
    </Stack>
  );
}
