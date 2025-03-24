import type { Meta, StoryObj } from "@storybook/react";
import Themeisle398 from "../Themeisle398";

const meta: Meta<typeof Themeisle398> = { title: "Themeisle/Themeisle398", component: Themeisle398 };

export default meta;
type Story = StoryObj<typeof Themeisle398>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
