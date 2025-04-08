import type { Meta, StoryObj } from "@storybook/react";
import Themeisle266 from "../Themeisle266";

const meta: Meta<typeof Themeisle266> = { title: "Themeisle/Themeisle266", component: Themeisle266 };

export default meta;
type Story = StoryObj<typeof Themeisle266>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
