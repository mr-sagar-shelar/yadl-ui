import type { Meta, StoryObj } from "@storybook/react";
import Themeisle274 from "../Themeisle274";

const meta: Meta<typeof Themeisle274> = { title: "Themeisle/Themeisle274", component: Themeisle274 };

export default meta;
type Story = StoryObj<typeof Themeisle274>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
