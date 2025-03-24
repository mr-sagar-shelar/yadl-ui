import type { Meta, StoryObj } from "@storybook/react";
import Themeisle87 from "../Themeisle87";

const meta: Meta<typeof Themeisle87> = { title: "Themeisle/Themeisle87", component: Themeisle87 };

export default meta;
type Story = StoryObj<typeof Themeisle87>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
