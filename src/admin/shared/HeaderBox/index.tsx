import React from "react";
import {
  BaseHeaderLayout,
  HeaderLayout,
  Box,
  Button,
} from "@strapi/design-system";
import { Link } from "react-router-dom";
import { ArrowLeft } from "@strapi/icons";
import { Plus } from "@strapi/icons";
import { Pencil } from "@strapi/icons";

export const HeaderBox = (props: {
  title: string;
  subtitle?: string;
  primaryAction?: JSX.Element;
  secondaryAction?: JSX.Element;
  navigationActions?: {
    path: string;
    icon: JSX.Element;
    text: string;
  };
}) => {
  const NavigationIcon = (props: {
    path?: string;
    icon?: JSX.Element;
    children: JSX.Element;
  }) => {
    if (!props.path) {
      return null;
    }
    return (
      <Link startIcon={<ArrowLeft />} to="/">
        {props.children}
      </Link>
    );
  };
  return (
    <Box background="neutral100">
      <BaseHeaderLayout
        navigationAction={
          <NavigationIcon
            icon={props.navigationActions?.icon}
            path={props.navigationActions?.path}
          >
            <h3>{props.navigationActions?.text}</h3>
          </NavigationIcon>
        }
        primaryAction={props.primaryAction}
        secondaryAction={props.secondaryAction}
        title={props.title}
        subtitle={props.subtitle}
        as="h2"
      />
    </Box>
  );
};
