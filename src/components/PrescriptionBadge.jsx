export default function PrescriptionBadge({ rx }) {
  return rx ? (
    <span className="rounded-md bg-amber px-2 py-0.5 text-xs font-semibold text-[#2b1a00]">Prescription needed</span>
  ) : (
    <span className="rounded-md bg-mint px-2 py-0.5 text-xs font-semibold text-pine">No prescription</span>
  );
}
