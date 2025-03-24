import type { Meta, StoryObj } from "@storybook/react";
import Themeisle487 from "../Themeisle487";

const meta: Meta<typeof Themeisle487> = { title: "Themeisle/Themeisle487", component: Themeisle487 };

export default meta;
type Story = StoryObj<typeof Themeisle487>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
