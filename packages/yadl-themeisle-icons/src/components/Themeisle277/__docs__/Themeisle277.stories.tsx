import type { Meta, StoryObj } from "@storybook/react";
import Themeisle277 from "../Themeisle277";

const meta: Meta<typeof Themeisle277> = { title: "Themeisle/Themeisle277", component: Themeisle277 };

export default meta;
type Story = StoryObj<typeof Themeisle277>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
