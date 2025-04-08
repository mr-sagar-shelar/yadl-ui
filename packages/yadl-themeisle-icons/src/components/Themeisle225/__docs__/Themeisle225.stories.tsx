import type { Meta, StoryObj } from "@storybook/react";
import Themeisle225 from "../Themeisle225";

const meta: Meta<typeof Themeisle225> = { title: "Themeisle/Themeisle225", component: Themeisle225 };

export default meta;
type Story = StoryObj<typeof Themeisle225>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
