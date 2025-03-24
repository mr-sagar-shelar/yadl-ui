import type { Meta, StoryObj } from "@storybook/react";
import Themeisle249 from "../Themeisle249";

const meta: Meta<typeof Themeisle249> = { title: "Themeisle/Themeisle249", component: Themeisle249 };

export default meta;
type Story = StoryObj<typeof Themeisle249>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
