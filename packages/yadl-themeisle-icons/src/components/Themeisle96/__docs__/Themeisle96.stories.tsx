import type { Meta, StoryObj } from "@storybook/react";
import Themeisle96 from "../Themeisle96";

const meta: Meta<typeof Themeisle96> = { title: "Themeisle/Themeisle96", component: Themeisle96 };

export default meta;
type Story = StoryObj<typeof Themeisle96>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
