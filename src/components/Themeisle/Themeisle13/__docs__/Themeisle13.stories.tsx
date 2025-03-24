import type { Meta, StoryObj } from "@storybook/react";
import Themeisle13 from "../Themeisle13";

const meta: Meta<typeof Themeisle13> = { title: "Themeisle/Themeisle13", component: Themeisle13 };

export default meta;
type Story = StoryObj<typeof Themeisle13>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
