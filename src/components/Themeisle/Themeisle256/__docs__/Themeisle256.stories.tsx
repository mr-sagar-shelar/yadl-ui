import type { Meta, StoryObj } from "@storybook/react";
import Themeisle256 from "../Themeisle256";

const meta: Meta<typeof Themeisle256> = { title: "Themeisle/Themeisle256", component: Themeisle256 };

export default meta;
type Story = StoryObj<typeof Themeisle256>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
