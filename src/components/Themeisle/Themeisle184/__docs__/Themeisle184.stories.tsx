import type { Meta, StoryObj } from "@storybook/react";
import Themeisle184 from "../Themeisle184";

const meta: Meta<typeof Themeisle184> = { title: "Themeisle/Themeisle184", component: Themeisle184 };

export default meta;
type Story = StoryObj<typeof Themeisle184>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
