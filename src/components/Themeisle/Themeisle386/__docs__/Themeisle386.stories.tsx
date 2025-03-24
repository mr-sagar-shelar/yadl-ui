import type { Meta, StoryObj } from "@storybook/react";
import Themeisle386 from "../Themeisle386";

const meta: Meta<typeof Themeisle386> = { title: "Themeisle/Themeisle386", component: Themeisle386 };

export default meta;
type Story = StoryObj<typeof Themeisle386>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
