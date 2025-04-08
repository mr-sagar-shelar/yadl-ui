import type { Meta, StoryObj } from "@storybook/react";
import Themeisle181 from "../Themeisle181";

const meta: Meta<typeof Themeisle181> = { title: "Themeisle/Themeisle181", component: Themeisle181 };

export default meta;
type Story = StoryObj<typeof Themeisle181>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
