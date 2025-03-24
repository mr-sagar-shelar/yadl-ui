import type { Meta, StoryObj } from "@storybook/react";
import Themeisle72 from "../Themeisle72";

const meta: Meta<typeof Themeisle72> = { title: "Themeisle/Themeisle72", component: Themeisle72 };

export default meta;
type Story = StoryObj<typeof Themeisle72>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
