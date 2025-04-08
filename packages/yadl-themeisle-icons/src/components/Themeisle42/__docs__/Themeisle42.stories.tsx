import type { Meta, StoryObj } from "@storybook/react";
import Themeisle42 from "../Themeisle42";

const meta: Meta<typeof Themeisle42> = { title: "Themeisle/Themeisle42", component: Themeisle42 };

export default meta;
type Story = StoryObj<typeof Themeisle42>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
