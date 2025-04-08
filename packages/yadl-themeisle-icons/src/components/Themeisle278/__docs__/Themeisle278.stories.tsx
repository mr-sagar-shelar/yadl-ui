import type { Meta, StoryObj } from "@storybook/react";
import Themeisle278 from "../Themeisle278";

const meta: Meta<typeof Themeisle278> = { title: "Themeisle/Themeisle278", component: Themeisle278 };

export default meta;
type Story = StoryObj<typeof Themeisle278>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
