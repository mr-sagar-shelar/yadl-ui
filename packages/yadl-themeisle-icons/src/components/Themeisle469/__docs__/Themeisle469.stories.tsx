import type { Meta, StoryObj } from "@storybook/react";
import Themeisle469 from "../Themeisle469";

const meta: Meta<typeof Themeisle469> = { title: "Themeisle/Themeisle469", component: Themeisle469 };

export default meta;
type Story = StoryObj<typeof Themeisle469>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
