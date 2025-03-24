import type { Meta, StoryObj } from "@storybook/react";
import Themeisle285 from "../Themeisle285";

const meta: Meta<typeof Themeisle285> = { title: "Themeisle/Themeisle285", component: Themeisle285 };

export default meta;
type Story = StoryObj<typeof Themeisle285>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
