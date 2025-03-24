import type { Meta, StoryObj } from "@storybook/react";
import Themeisle269 from "../Themeisle269";

const meta: Meta<typeof Themeisle269> = { title: "Themeisle/Themeisle269", component: Themeisle269 };

export default meta;
type Story = StoryObj<typeof Themeisle269>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
