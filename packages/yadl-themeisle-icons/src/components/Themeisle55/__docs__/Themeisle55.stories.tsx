import type { Meta, StoryObj } from "@storybook/react";
import Themeisle55 from "../Themeisle55";

const meta: Meta<typeof Themeisle55> = { title: "Themeisle/Themeisle55", component: Themeisle55 };

export default meta;
type Story = StoryObj<typeof Themeisle55>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
