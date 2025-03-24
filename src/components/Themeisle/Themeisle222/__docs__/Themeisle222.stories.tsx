import type { Meta, StoryObj } from "@storybook/react";
import Themeisle222 from "../Themeisle222";

const meta: Meta<typeof Themeisle222> = { title: "Themeisle/Themeisle222", component: Themeisle222 };

export default meta;
type Story = StoryObj<typeof Themeisle222>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
