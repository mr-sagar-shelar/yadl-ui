import type { Meta, StoryObj } from "@storybook/react";
import Themeisle251 from "../Themeisle251";

const meta: Meta<typeof Themeisle251> = { title: "Themeisle/Themeisle251", component: Themeisle251 };

export default meta;
type Story = StoryObj<typeof Themeisle251>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
