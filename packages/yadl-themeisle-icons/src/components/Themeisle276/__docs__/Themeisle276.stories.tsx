import type { Meta, StoryObj } from "@storybook/react";
import Themeisle276 from "../Themeisle276";

const meta: Meta<typeof Themeisle276> = { title: "Themeisle/Themeisle276", component: Themeisle276 };

export default meta;
type Story = StoryObj<typeof Themeisle276>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
