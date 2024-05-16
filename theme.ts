"use client";
import { generateColors } from '@mantine/colors-generator';

import { AppShell, Button, Text, createTheme } from "@mantine/core";

export const theme = createTheme({
  primaryColor: 'text-color',
  primaryShade: 9,
  colors: {
    'text-color': generateColors('#3E184B'),
    'btn-color': generateColors("#F1C775")
  },
  components: {
    AppShell: AppShell.extend({
      defaultProps: {
        bg: '#FFF7E9',
        c:'text-color'
      }
    }),
    Text: Text.extend({
      defaultProps: {
        c: 'text-color'
      }
    }),
    PrimaryButton: Button.extend({
      defaultProps: {
        color: 'btn-color.4',
        c: 'text-color',
        w: 132,
        h: 48,
        radius: 12,
        fw:700,
        fz: 'md'
      }
    })
  }
});
