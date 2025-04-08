import type { Meta, StoryObj } from "@storybook/react";
import Firestore from "../Firestore";

const meta: Meta<typeof Firestore> = { title: "GCP/Firestore", component: Firestore };

export default meta;
type Story = StoryObj<typeof Firestore>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
