import type { Meta, StoryObj } from "@storybook/react";
import Themeisle382 from "../Themeisle382";

const meta: Meta<typeof Themeisle382> = { title: "Themeisle/Themeisle382", component: Themeisle382 };

export default meta;
type Story = StoryObj<typeof Themeisle382>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
