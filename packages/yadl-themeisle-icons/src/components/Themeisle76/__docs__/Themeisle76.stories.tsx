import type { Meta, StoryObj } from "@storybook/react";
import Themeisle76 from "../Themeisle76";

const meta: Meta<typeof Themeisle76> = { title: "Themeisle/Themeisle76", component: Themeisle76 };

export default meta;
type Story = StoryObj<typeof Themeisle76>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
