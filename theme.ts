"use client";
import { generateColors } from '@mantine/colors-generator';

import { AppShell, Button, Text, Title, createTheme } from "@mantine/core";

export const theme = createTheme({
  fontFamily: "Epilogue, sans-serif",
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
        c: 'text-color'
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
        fw: 700,
        fz: 'md'
      }
    }),
    SpacedText: Text.extend({
      defaultProps: {
        fz: {
          base: 'calc(var(--mantine-font-size-sm) * 1.25)',
          lg: 'calc(var(--mantine-font-size-md) * 1.5)'
        },
        fw: 600,
        tt: 'uppercase',
        lts: 3
      }
    }),
    CustomTitle: Text.extend({
      defaultProps: {
        fz: {
          base: 'calc(var(--mantine-font-size-sm) * 2)',
          lg: 'calc(var(--mantine-font-size-md) * 3)'
        },
        fw: 700,
        lts: 1.5,
      }
    })
  }
});
