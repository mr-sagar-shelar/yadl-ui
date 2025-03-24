import type { Meta, StoryObj } from "@storybook/react";
import Themeisle392 from "../Themeisle392";

const meta: Meta<typeof Themeisle392> = { title: "Themeisle/Themeisle392", component: Themeisle392 };

export default meta;
type Story = StoryObj<typeof Themeisle392>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
