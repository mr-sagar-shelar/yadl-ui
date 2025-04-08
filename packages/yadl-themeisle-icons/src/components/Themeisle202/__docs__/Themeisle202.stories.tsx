import type { Meta, StoryObj } from "@storybook/react";
import Themeisle202 from "../Themeisle202";

const meta: Meta<typeof Themeisle202> = { title: "Themeisle/Themeisle202", component: Themeisle202 };

export default meta;
type Story = StoryObj<typeof Themeisle202>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
