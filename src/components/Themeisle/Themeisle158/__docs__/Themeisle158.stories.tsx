import type { Meta, StoryObj } from "@storybook/react";
import Themeisle158 from "../Themeisle158";

const meta: Meta<typeof Themeisle158> = { title: "Themeisle/Themeisle158", component: Themeisle158 };

export default meta;
type Story = StoryObj<typeof Themeisle158>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
