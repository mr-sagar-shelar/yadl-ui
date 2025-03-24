import type { Meta, StoryObj } from "@storybook/react";
import Themeisle77 from "../Themeisle77";

const meta: Meta<typeof Themeisle77> = { title: "Themeisle/Themeisle77", component: Themeisle77 };

export default meta;
type Story = StoryObj<typeof Themeisle77>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
