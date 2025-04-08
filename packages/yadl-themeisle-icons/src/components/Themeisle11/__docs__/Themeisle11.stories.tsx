import type { Meta, StoryObj } from "@storybook/react";
import Themeisle11 from "../Themeisle11";

const meta: Meta<typeof Themeisle11> = { title: "Themeisle/Themeisle11", component: Themeisle11 };

export default meta;
type Story = StoryObj<typeof Themeisle11>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
